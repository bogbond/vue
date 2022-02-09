const App = {
	data(){
		return{
			placeholder: "Enter text here ..",
			title: "Task List",
			inputValue: '',
			notes: ['note_1']
		}
	},
	methods: {
		// inputChange(event){
		// 	this.inputValue= event.target.value
		// },
		addNewNote(){
			if(this.inputValue !==''){
				this.notes.push(this.inputValue)
				this.inputValue = ''	
			}
		},
		toUpperCase(item){
return item.toUpperCase()
		},
		removeNote(i){
			this.notes.splice(i, 1)

		}
	}
}

Vue.createApp(App).mount('#app')