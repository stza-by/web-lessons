export default class GitHubApi {

  static getUsers = async () => {
    const result = await fetch('https://api.github.com/users');
    const users = await result.json();
    return this.convertUsers(users);
  }

  static searchUsers = async (userName) => {
    const result = await fetch(`https://api.github.com/search/users?q=${userName}`);
    const body = await result.json();
    return this.convertUsers(body.items);
  }

  static convertUsers  = (users) => {
    return users.map(({id, login, avatar_url, html_url}) => ({id, login, avatar_url, html_url}))
  }

  static getUserData = async (login) => {
    const result = await fetch(`https://api.github.com/users/${login}`);
    return await result.json();
  }
}

