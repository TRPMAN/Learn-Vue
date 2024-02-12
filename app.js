const app = Vue.createApp({
    data() {
      return {
        urls : 'https://vuejs.org/guide/quick-start.html',
        showBooks: true,
        books: [
          { title: 'One Piece', author: 'Gear Second',  img:'asset/1.jpg',isFav : true },
          { title: 'One Piece', author: 'Gear Forth: Bounceman', img:'asset/2.jpg',isFav : false },
          { title: 'One Piece', author: 'Gear Forth: Snakeman', img:'asset/3.jpg',isFav : true },
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
            // return this.books.filter((book) => book.isFav)
           
        }
    }
  })
  
  app.mount('#app')