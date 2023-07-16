import { callSignal } from 'nixix/primitives';

const App = () => {
	const [count, setCount] = callSignal(0);

	return (
		<div className="app w-screen h-screen bg-white grid place-content-center">
			<button on:click={() => setCount(++count.value)} className="button w-fit h-fit px-3 py-2 bg-gray-200 rounded-md font-bold" >count is {count}</button>
		</div>
	)
};

export default App;