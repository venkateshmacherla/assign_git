import React from 'react'

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      items: [],
      loading: true,
      page: 2,
      date: '',
      scrolling: false,
      totalPages: 30,
    }
    this.state.date = prompt()
  }

  componentDidMount() {
    this.search()
    this.scrollListener = window.addEventListener('scroll', e => {
      this.handleScroll(e)
    })
  }

  handleScroll() {
    const {scrolling, totalPages, page} = this.state
    if (scrolling) return
    if (totalPages <= page) return
    const lastRepo = document.querySelector('ul.repos > li:last-child')
    const lastRepoOffset = lastRepo.offsetTop + lastRepo.clientHeight
    const pageOffset = window.pageYOffset + window.innerHeight
    const bottomOffset = 50
    if (pageOffset > lastRepoOffset - bottomOffset) {
      this.loadMore()
    }
  }

  search() {
    const url = `https://api.github.com/search/repositories?q=created:>2017-10-22&sort=stars&order=desc${this.setState.date}&sort=stars&order=desc${this.setState.page}`

    fetch(url)
      .then(res => res.json())
      .then(json => {
        let items
        if (json.items) {
          if (Array.isArray(json.items)) {
            items = json.items
          } else {
            items = [json.items]
          }
        } else {
          items = []
        }

        this.setState({
          loading: false,
          items: [...this.setState.items, ...items],
          scrolling: false,
        })
      })
  }

  loadMore() {
    this.setState(
      prevState => ({
        page: prevState.page + 1,
        scrolling: true,
      }),
      this.search(),
    )
  }
}

export default App
