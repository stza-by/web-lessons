export default class GitHubApi {

  static getUsers = async () => {
    const result = await fetch('https://api.github.com/users');
    const users = await result.json();
    return this.convertUsers(users);
  }

  static convertUsers  = (users) => {
    return users.map(({id, login, avatar_url, html_url}) => ({id, login, avatar_url, html_url}))
  }
}

