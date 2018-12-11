export const normaliseSearchResults = ({
  name,
  html_url,
  description,
  updated_at,
  homepage,
  stargazers_count,
  subscribers_count = null,
  forks_count,
  owner,
  score
}) => ({
  name,
  html_url,
  description,
  updated_at,
  homepage,
  stargazers_count,
  subscribers_count,
  forks_count,
  owner: {
    login: owner.login,
    avatar_url: owner.avatar_url,
    html_url: owner.html_url
  },
  score
});
