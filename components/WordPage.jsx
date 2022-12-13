import { Link, UpdateButton } from 'components'
import { useRouter } from 'next/router'

export const WordPage = (word) => {
    const router = useRouter()

    return (
        <>
            <Link href={`/${router.asPath.split('/')[1]}`} style={{ textDecoration: 'none' }}>
                <UpdateButton variant='contained'>Back</UpdateButton>
            </Link>

            <h1 className='subTitle'>{`Word id: ${word.id} `}</h1>

            <div>
                <div className='wordWrapper'></div>

                <div className='flexWrapper'>
                    <div className='item'>
                        <h2>Examples (in future):</h2>
                        <pre className='textJSON'>{word.description}</pre>
                    </div>

                    <div className='item'>
                        <h2>Json word:</h2>
                        <pre className='textJSON'>{JSON.stringify(word, undefined, 2)}</pre>
                    </div>
                </div>
            </div>
        </>
    )
}
