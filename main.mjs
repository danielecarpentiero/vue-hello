const { createApp } = Vue

  createApp({
    data() {
      return {
        message: 'Ciao classe 110!',
        immagine: "img/random-pic.jpg"
      }
    }
  }).mount('#app')