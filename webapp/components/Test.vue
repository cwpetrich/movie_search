<template>
  <div>
    <div>
      <h1 class="title">Search</h1>
      <input v-model="search" placeholder="Enter movie title..." />
      <button @click="getMovies()">Search</button>
    </div>
    <div class="container max-width-700">
      <div v-if="movies && movies.length">
        <div
          v-for="movie in movies"
          :key="movie.movie_id"
          class="display-flex movie-container"
        >
          <div class="movie-image-container">
            <img :src="movie.poster_image_url" />
          </div>
          <div class="flex-grow-1 pad-left vertical-align-center">
            <div class="movie-title">{{ movie.title }}</div>
            <div>{{ movie.popularity_summary }}</div>
          </div>
        </div>
      </div>
      <ul v-if="errors && errors.length">
        <li v-for="error of errors" :key="error">
          {{ error.message }}
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
// Import axios
import axios from 'axios'
export default {
  data() {
    return {
      search: '',
      movies: [],
      errors: [],
    }
  },
  methods: {
    getMovies() {
      axios
        .get(`http://localhost:5000/movies?search=${encodeURI(this.search)}`)
        .then((response) => {
          this.movies = response.data
        })
        .catch((e) => {
          this.errors.push(e)
        })
    },
  },
}
</script>
<style>
.movie-title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 150;
  font-size: 40px;
  color: #35495e;
  letter-spacing: 1px;
}
.display-flex {
  display: flex;
}
.flex-grow-1 {
  flex-grow: 1;
}
.movie-container {
  padding: 20px;
}
.max-width-700 {
  max-width: 900px;
}
.pad-left {
  padding-left: 25px;
}
.movie-image-container {
  min-width: 185px;
}
.vertical-align-center {
  vertical-align: middle;
}
</style>
