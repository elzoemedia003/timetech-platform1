const { syncAll } = require('../jobsFetcher');
const db = require('../db');

export default async function handler(req, res) {
  if (req.method === 'GET') {
    const { search = '', category = 'all', skills, limit = 50, offset = 0 } = req.query;
    let base = 'SELECT * FROM jobs';
    const clauses = [];
    const params = [];
    if (category !== 'all') {
      params.push(category);
      clauses.push(`category = $${params.length}`);
    }
    if (search) {
      params.push(`%${search}%`);
      clauses.push(`(lower(title) LIKE lower($${params.length}) OR lower(company) LIKE lower($${params.length}))`);
    }
    if (skills) {
      const skillsArr = skills.split(',');
      params.push(skillsArr);
      clauses.push(`skills && $${params.length}::text[]`);
    }
    const where = clauses.length ? ' WHERE ' + clauses.join(' AND ') : '';
    params.push(limit, offset);
    const q = `${base}${where} ORDER BY created_at DESC LIMIT $${params.length-1} OFFSET $${params.length}`;
    const result = await db.query(q, params);
    res.status(200).json({ jobs: result.rows.slice(0,10), total: result.rows.length });
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
