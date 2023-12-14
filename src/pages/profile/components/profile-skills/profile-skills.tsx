import styled from 'styled-components'

const SKILLS = [
  'Html',
  'Css',
  'React',
  'JavaScript',
  'Typescript',
  'Scss',
  'Mui',
  'TailWind',
  'Axios',
  'React-router-dom',
  'Patters',
  'OOP',
  'Algorithms',
  'Node.js',
  'Express',
  '.Net',
  'Next',
  'Gatsby',
]
export const ProfileSkills = () => {
  return (
    <Wrapper>
      <Title>Skills</Title>
      <Skills>
        {SKILLS.map((skill) => (
          <Item key={skill}> {skill}</Item>
        ))}
      </Skills>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  background: #fff;
  width: 100%;
  padding: 20px;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`

const Skills = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
`
const Title = styled.h2`
  font-size: 20px;
`
const Item = styled.span`
  padding: 10px 15px;
  background-color: #f2f2f2;
  border: none;
  border-radius: 20px;
  font-size: 14px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`
