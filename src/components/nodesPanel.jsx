import NewMessage from "./newMessage";

function NodesPanel({ addNewNode }) {
    return <div className={`w-80 h-[${window.innerHeight - 96}px] !border-l-2 !border-l-slate-400 !border-l-solid`}>
        <NewMessage addNewNode={addNewNode} />
    </div>
}

export default NodesPanel;