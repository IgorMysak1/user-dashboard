import styled from 'styled-components'
import { Button } from '../../../../UI'
import { FlagIcon } from '../../../../assets/icons/flag.tsx'

interface ProfileDataProps {}

const URL =
  'https://thumbs.dreamstime.com/b/cartoon-avatar-designer-ai-generated-programmer-avatar-designer-ai-generated-programmer-cartoon-character-programming-286004113.jpg'

const AVATAR_SIZE = 200

export const ProfileData = ({}: ProfileDataProps) => {
  const data = ['Ukraine, Lviv', 'Full-Time', 'Senior React Developer']

  return (
    <div>
      <Gradient />
      <PersonalInfo>
        <Avatar src={URL} />
        <p style={{ paddingTop: 20 }}>John Doe</p>
        <div style={{ display: 'flex', gap: 20, padding: '20px 0' }}>
          <FlagIcon />
          {data.join(' • ')}
        </div>
        <div style={{ display: 'flex', gap: 20 }}>
          <Button>Edit</Button>
          <Button>Delete account</Button>
        </div>
      </PersonalInfo>
    </div>
  )
}

const Gradient = styled.div`
  height: 200px;
  width: 100%;
  background: linear-gradient(#f5e3b1, #efd1cc);
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
`

const PersonalInfo = styled.div`
  position: relative;
  width: 100%;
  background: #fff;
  padding: ${AVATAR_SIZE / 2}px 20px 20px;
  border-bottom-right-radius: 20px;
  border-bottom-left-radius: 20px;
`

const Avatar = styled.img`
  height: ${AVATAR_SIZE}px;
  width: ${AVATAR_SIZE}px;
  position: absolute;
  left: 20px;
  top: -${AVATAR_SIZE / 2}px;
  border-radius: 50%;
  border: 6px solid #fff;
`
