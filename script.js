const usernameInput = document.getElementById("username");
const fetchButton = document.getElementById("fetch-button");
const userInfoElement = document.getElementById("user-info");

fetchButton.addEventListener("click", async () => {
  const username = usernameInput.value;
  const response = await fetch(`https://api.github.com/users/${username}`);
  const userData = await response.json();
  const reposData = await fetch(`https://api.github.com/users/${username}/repos`).then((response) => response.json());

  userInfoElement.innerHTML = `
    <p>Name: ${userData.name}</p>
    <p>Email: ${userData.email}</p>
    <p>Bio: ${userData.bio}</p>
    <p>Location: ${userData.location}</p>
    <img src="${userData.avatar_url}" alt="Avatar" width="200" height="200">
    <p>Company: ${userData.company}</p>
    <p>Blog: <a href="${userData.blog}">${userData.blog}</a></p>
    <p>Twitter: <a href="https://twitter.com/${userData.twitter_username}">${userData.twitter_username}</a></p>
    <p>Created at: ${userData.created_at}</p>
    <p>Updated at: ${userData.updated_at}</p>
    <p>Number of public repositories: ${userData.public_repos}</p>
    <p>Number of followers: ${userData.followers}</p>
    <p>Number of following: ${userData.following}</p>
    <p>Public repositories:</p>
    <ul>
      ${reposData.map((repo) => `<li><a href="${repo.html_url}">${repo.name}</a></li>`).join("")}
    </ul>
  `;
});
