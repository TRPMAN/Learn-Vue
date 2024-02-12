const app = Vue.createApp({
    data() {
      return {
        urls : 'https://vuejs.org/guide/quick-start.html',
        showBooks: true,
        books: [
          { title: 'name of the wind', author: 'patrick rothfuss',  img:'asset/1.jpg',isFav : true },
          { title: 'the way of kings', author: 'brandon sanderson', img:'asset/2.jpg',isFav : false },
          { title: 'the final empire', author: 'brandon sanderson', img:'asset/3.jpg',isFav : true },
        ],
      }
    },
    methods: {
      toggleShowBooks() {
        this.showBooks =  !this.showBooks
      },
      handlefav(book){
        book.isFav = !book.isFav
        console.log(this.isFav )
      }
    },
    computed:{
        fb(){
            return this.books.filter((book) => book.isFav)
           
        }
    }
  })
  
  app.mount('#app')