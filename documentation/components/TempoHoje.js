export default {
  name: "TempoHoje",
  data() {
    return {
      temperaturaMaxima: 0
    }
  },
  template: `<p>Rio de janeiro, máxima {{temperaturaMaxima}}</p>`,
  methods: {
    puxarTempo(){
      fetch("https://www.metaweather.com/api/location/455825/")
      .then((res)=> res.json())
      .then((res) => {
        this.temperaturaMaxima  = res.consolidated_weather[0].max_temp.toFixed(2)
      })
    }
  },

  created(){
    this.puxarTempo()
  }
}