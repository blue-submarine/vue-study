const PlayList={
    data(){
        return{
            PlayList:["what about now"," 一千万个可能","  Me llamas"],
            searchTerm:" ",

        };
    },
    computed:{
      filteredPlayList(){
        if(this.searchTerm){
            return this.PlayList.filter((song)=>
            song.toLowerCase().includes(this.searchTerm.toLowerCase()));
        }
        else{
            return this.PlayList;
        }
      }
    },

};

Vue.createApp(PlayList).mount("#app");