import react from 'react'
import {Card , Button} from 'react-bootstrap'

const Profile = (profile) => {
    const handleName = (name) =>{
      alert("hello"+" "+name);
    }
    return (
        <div>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={profile.picture} />
                <Card.Body>
                    <Card.Title>{profile.name} {profile.lastName}</Card.Title >
                    <Card.Text>
                        {profile.bio} <br/><br/>
                        <span>{profile.profession}</span>
                    </Card.Text>
                    <Button variant="primary"onClick={()=>handleName(profile.name)} >Go somewhere</Button>
                </Card.Body>
            </Card>
        </div>
    )
}
export default Profile