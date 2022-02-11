const App = {
	data(){
		return{
			placeholder: "Enter text here ..",
			title: "Task List",
			inputValue: '',
			notes: ['note_1'],
			change: true
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
				// this.console.log(change)	
			}
		},
		toUpperCase(item){
			return item.toUpperCase()
		},
		removeNote(i){
			this.notes.splice(i, 1)

		},
		changeNote(idx){
			console.log("changeBTN" + idx),
			this.change = false
			console.log(this.change)
		},
		changeNoteB(idx){
			console.log("changeBTNback" + idx),
			this.change = true
			console.log(this.change)
		}
	}
}

Vue.createApp(App).mount('#app')
