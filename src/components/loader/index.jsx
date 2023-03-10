export default function Loader(props) {
    const { style, styleImg } = props;
    return (
        <div style={style || {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
            height: '100%',
        }}>
            <img style={styleImg || {width: '100%', height: '100%'}} src={require('../../assets/gif/LoaderGif.gif')} alt='Загрузка' />
        </div>
    )
}