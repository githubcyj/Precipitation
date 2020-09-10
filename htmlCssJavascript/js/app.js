class App extends React.Component {
    render() {
        return (
            <div>
                {this.props.person.name}
                <Observer>{() => <div>{this.props.person.name}</div>}</Observer>
            </div>
        )
    }
}

const person = observable({ name: "John" })

ReactDOM.render(<App person={person} />, document.body)
person.name = "Mike" // will cause the Observer region to re-render