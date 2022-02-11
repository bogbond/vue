const App = {
	data(){
		return{
			placeholder: "Enter text here ..",
			title: "Task List",
			inputValue: '',
			notes: ['note_1', 'note_2', 'note_3'],
			change: true,
			inputValueR: '',
			inputValueB: '',
			test: 0
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
			console.log("change val" + this.change)
			// console.log(this.inputValueR)
			console.log("idx : " +idx)
			this.test = idx
			return 
			
			// this.inputValueB = this.inputValueR
			
		},
		changeNoteB(idx){
			console.log("changeBTNback" + idx),
			this.notes[idx]= this.inputValueR
			this.change = true
			console.log(this.change)
			// this.inputValueB = this.inputValueR
			// this.notes[idx]= this.inputValueB
			
		}
		
	},
	computed: {
		
	}
}

Vue.createApp(App).mount('#app')
