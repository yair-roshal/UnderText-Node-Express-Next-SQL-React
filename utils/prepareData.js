// creating a new json that will be understandable to the graph library
export const prepareData = ({ nodes }) => {
    let newNodes = []
    let newLinks = []
    let index = 0

    for (let key in nodes) {
        index++
        let value = nodes[key]
        newNodes.push({ id: value.name })

        // creating new TargetName
        let mewSource = Object.values(value.inputs)[0]
        let regexpUpperCase = /[A-Z]/
        let mewTargetNamePosition = mewSource.search(regexpUpperCase)
        let mewTargetName = mewSource[mewTargetNamePosition]

        // creating  new Label
        let mewMetadataArray = mewSource.split('.')
        var mewMetadataProperity = mewMetadataArray[mewMetadataArray.length - 1]

        for (let keyInner in nodes) {
            let valueInner = nodes[keyInner]

            if (valueInner.name == mewTargetName) {
                var newLabel = `${mewMetadataProperity} of node ${mewTargetName} : ${valueInner.metadata[mewMetadataProperity]}`
            }
        }

        newLinks.push({
            source: value.name,
            target: mewTargetName,
            label: newLabel,
            breakPoints: index == 1 ? [{ x: 370, y: 270 }] : [],
        })
    }

    return {
        nodes: newNodes,
        links: newLinks,
    }
}
