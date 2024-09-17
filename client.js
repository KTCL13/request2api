const { createApp, ref } = Vue;

createApp({
  data() {
      const catImg = null;
      const dogImg = null;
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
        console.log(data)
        console.log(data.catImg);
        this.catImg = data.catImg;
        this.dogImg = data.dogImg;
        console.log(catImg);
      }catch (error){
        console.error('Error al obtener las imágenes:', error);
      }
    },
  },
}).mount("#app");
