import Svg from '@/ui/components/svg/Svg';
import { ILista } from '@/data/@types/lista';
import { useColorIcon } from '@/data/hooks/useColorIcon'
import styles from './styles.module.scss';

const Home = () => {
    const { colorSelected } = useColorIcon();

    const lista: ILista[] = [
        { color: 'verde', descricao: 'Cliente nível Verde' },
        { color: 'platinum', descricao: 'Cliente nível Platinum' },
        { color: 'ouro', descricao: 'Cliente nível Ouro' }
    ];

    return (
        <>
            <h1>SVG Component</h1>
            {
                lista.map((item: ILista, id: number) =>
                    <div className={styles.home__lista} key={`listIcon-${id.toString()}`}>
                        <Svg width="24" height="24" color={colorSelected(item.color)} />
                        {item.descricao}
                    </div>
                )
            }
        </>
    );
}

export default Home;