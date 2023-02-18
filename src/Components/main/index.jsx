import Datas from '../../datas/data'
import Card from '../Card/Card'
import '../../Styles/Main.css'

function Main() {
    return (
        <main className='homeGallery'>
            {Datas.map(data => {
                return (
                    <Card
                        key={data.id}
                        id={data.id}
                        title={data.title}
                        cover={data.cover}
                    />
                )
            })}
        </main>
    )
}

export default Main