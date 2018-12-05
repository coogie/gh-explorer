export const normaliseSearchResults = item => {
  return {
    name: item.name,
    html_url: item.html_url,
    description: item.description,
    updated_at: item.updated_at,
    homepage: item.homepage,
    stargazers_count: item.stargazers_count,
    stargazers_count_formatted: item.stargazers_count.toLocaleString("en-GB"),
    owner: {
      login: item.owner.login,
      avatar_url: item.owner.avatar_url,
      html_url: item.owner.html_url
    }
  };
};
