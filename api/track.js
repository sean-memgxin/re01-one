export default async (req, res) => {
  const response = await fetch('https://api.github.com/repos/sean-memgxin/re01-one/dispatches', {
    method: 'POST',
    headers: {
      'Authorization': `token ${process.env.GITHUB_PAT}`,
      'Accept': 'application/vnd.github.everest-preview+json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ event_type: 'page_visited' })
  });
  res.status(response.status).end();
};
