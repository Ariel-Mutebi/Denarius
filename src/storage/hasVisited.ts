function hasVisited() {
  return localStorage.getItem('visited') === 'true';
}

export default hasVisited