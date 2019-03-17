interface ITreeNode {
    value : number
    children?: ITreeNode[];
}

function getLeaves(nodes : ITreeNode[]) : ITreeNode[] {
    let result : ITreeNode[] = [];
    function innerGetLeaves(nodes : ITreeNode[]) : ITreeNode[] {
        if (nodes.length === 0) {
            return []
        } else {
            for (let i = 0, len = nodes.length; i < len; i++) {
                if (nodes[i].children) {
                    result.concat(innerGetLeaves(nodes[i].children || []))
                } else {
                    result.push(nodes[i])
                }
            }
            return result
        }
    }
    innerGetLeaves(nodes)
    console.log(JSON.stringify(result))
    return result
}

getLeaves([
    {
        value: 1,
        children: [
            {
                value: 1.1
            }
        ]
    }, {
        value: 2,
        children: [
            {
                value: 2.1,
                // children: []
            }, {
                value: 2.2,
                children: [{
                    value:2.21,
                    
                }]
            }
        ]
    }, {
        value: 3
    }, {
        value: 4
    }
])