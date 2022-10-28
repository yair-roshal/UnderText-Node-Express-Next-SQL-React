import React, { useState, useEffect } from 'react'
import { GraphItem } from './GraphItem'

export const AllGraphs = ({ graphs }) => {
    const SLIDES_ON_PAGE = 2
    const SLIDE = 970 / SLIDES_ON_PAGE
    const MARGIN = -10
    const SLIDE_WIDTH = SLIDE + MARGIN

    const [offset, setOffset] = useState(0)
    const [slides, setSlides] = useState(graphs.length)

    useEffect(() => {
        setSlides(graphs.length)
    }, [graphs])

    const handleLeftArrowClick = () => {
        setOffset(currentOffset => {
            const newOffset = currentOffset + SLIDE_WIDTH
            return Math.min(newOffset, 0)
        })
    }
    const handleRightArrowClick = () => {
        setOffset(currentOffset => {
            const newOffset = currentOffset - SLIDE_WIDTH
            const maxOffset = -(SLIDE_WIDTH * (slides - SLIDES_ON_PAGE))
            return Math.max(newOffset, maxOffset)
        })
    }

    return (
        <>
            <div className='twoArrows'>
                <div onClick={handleLeftArrowClick} className='arrow prev'>
                    <a id='circleArrows'></a>
                </div>
            </div>

            <div
                className='allGraphs'
                style={{
                    transform: `translateX(${offset}px)`,
                }}
            >
                {graphs.map((graph, index) => (
                    <GraphItem key={index} graph={graph} />
                ))}
            </div>

            <div className='twoArrows'>
                <div onClick={handleRightArrowClick} className='arrow next '>
                    <a id='circleArrows'></a>
                </div>
            </div>
        </>
    )
}
