const usernameInput = document.getElementById("username");
const fetchButton = document.getElementById("fetch-button");
const userInfoElement = document.getElementById("user-info");

fetchButton.addEventListener("click", async () => {
  const username = usernameInput.value;
  const response = await fetch(`https://api.github.com/users/${username}`);
  const userData = await response.json();
  const reposData = await fetch(`https://api.github.com/users/${username}/repos`).then((response) => response.json());

  userInfoElement.innerHTML = `
    <p>Name: <b>${userData.name}</b></p>
    <p>Email: <b>${userData.email}</b></p>
    <p>Bio: <b>${userData.bio}</b></p>
    <p>Location: <b>${userData.location}</b></p>
    <img src="${userData.avatar_url}" alt="Avatar" width="200" height="200">
    <p>Company: <b>${userData.company}</b></p>
    <p>Blog: <b><a href="${userData.blog}">${userData.blog}</a></b></p>
    <p>Twitter: <b><a href="https://twitter.com/${userData.twitter_username}">${userData.twitter_username}</a></b></p>
    <p>Created at: <b>${userData.created_at}</b></p>
    <p>Updated at: <b>${userData.updated_at}</b></p>
    <p>Number of public repositories: <b>${userData.public_repos}</b></p>
    <p>Number of followers: <b>${userData.followers}</b></p>
    <p>Number of following: <b>${userData.following}</b></p>
    <p>Public repositories:</p>
    <ul>
      ${reposData.map((repo) => `<li><a href="${repo.html_url}">${repo.name}</a></li>`).join("")}
    </ul>
  `;
});
