const { createApp, ref } = Vue;

createApp({
  data() {
    const catImg=""
    const dogImg=""
    return {
      catImg,
      dogImg
    };
  },
  methods: {
    async getImages() {
      try {
        const response = await fetch(`http://localhost:3000/cat-dog?textCat=${this.textCat}`);
        const data = await response.json();
        this.catImg = data.catImg;
        this.dogImg = data.dogImg;
        console.log('Cat image:', this.catImg);
        console.log('Dog image:', this.dogImg);
      }catch (error){
        console.error('Error al obtener las imágenes:', error);
      }
    },
  },
}).mount("#app");
