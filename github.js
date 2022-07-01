// api.github.com/users/${username}
// api.github.com/users/${username}/repos

class Github {
  constructor() {
    this.client_ID = "6b8a88990a2458acdb7e";
    this.client_secret = "5c44cd81e524fa78268c31ea8a583847fb813886";
    this.repos_count = 5;
    this.repos_sort = "created: asc";
  }

  async getUser(username) {
    const profileResponse = await fetch(
      `https://api.github.com/users/${username}?client_id=${this.client_ID}&client_secret=${this.client_secret}`
    );
    const repoResponse = await fetch(
      `https://api.github.com/users/${username}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_ID}&client_secret=${this.client_secret}`
    );

    const profile = await profileResponse.json();
    const repos = await repoResponse.json();

    return {
      profile,
      repos,
    };
  }
}
