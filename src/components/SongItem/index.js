import {AiOutlineDelete} from 'react-icons/ai'
import {InnerList, DelBtn} from '../styledComponent'

const SongItem = ({detail, onDel}) => (
  <li
    style={{
      display: 'flex',
      justifyContent: 'space-between',
      paddingRight: '10px',
      marginBottom: '20px',
    }}
  >
    <InnerList>
      <img
        style={{height: '80px', marginRight: '15px'}}
        src={detail.imageUrl}
        alt="track"
      />
      <div>
        <p>{detail.name}</p>
        <p>{detail.genre}</p>
      </div>
    </InnerList>
    <InnerList style={{display: 'flex'}}>
      <p style={{justifySelf: 'end'}}>{detail.duration}</p>
      <button
        style={{
          border: 'none',
          backgroundColor: 'transparent',
          width: '25px',
          height: '25px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          marginLeft: '25px',
          cursor: 'pointer',
        }}
        onClick={() => onDel(detail.id)}
        type="button"
        testid="delete"
      >
        <AiOutlineDelete size="25px" color="#ffff" />
      </button>
    </InnerList>
  </li>
)

export default SongItem
