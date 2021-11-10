import React, { useState, useEffect, useContext } from 'react';
import { Loading, Header } from '../components';
import * as ROUTES from '../constants/routes';
import { FirebaseContext } from '../context/firebase';
import { SelectProfileContainer } from './profiles';
import { FooterContainer } from './footer';

export function BrowseContainer() {
    const [category, setCategory] = useState('series');
    const [profile, setProfile] = useState({});
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');
    
    const { firebase } = useContext(FirebaseContext);
    
    const user = {
        displayName: "Karl",
        photoURL: "1"
    };
    
    // useEffect(() => {
    //     setTimeout(() => {
    //         setLoading(false)
    //     }, 3000);
    // }, [user])
    
    return profile.displayName ? (
        <>
        {loading ? <Loading src={user.photoURL} /> : <Loading.ReleaseBody />}
        
            <Header src="dune3.png" dontShowOnSmallViewPort>
                <Header.Frame>
                    <Header.Group>
                        <Header.Logo to={ROUTES.HOME} src="/images/misc/logo.svg" alt="Netflix" />
                        <Header.TextLink 
                            active={category === 'series' ? 'true' : 'false'}
                            onClick={() => setCategory('series')}>
                            Series
                        </Header.TextLink>
                        <Header.TextLink 
                            active={category === 'films' ? 'true' : 'false'}
                            onClick={() => setCategory('films')}>
                            Films
                        </Header.TextLink>
                    </Header.Group>
                    <Header.Group>
                        <Header.Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
                        <Header.Profile>
                            <Header.Picture src={user.photoURL} />
                            <Header.Dropdown>
                                <Header.Group>
                                    <Header.Picture src={user.photoURL} />
                                    <Header.TextLink>{user.displayName}</Header.TextLink>
                                </Header.Group>
                                <Header.Group>
                                    <Header.TextLink onClick={() => firebase.auth().signOut()}>
                                        Sign out</Header.TextLink>
                                </Header.Group>
                            </Header.Dropdown>
                        </Header.Profile>
                    </Header.Group>
                </Header.Frame>
                
                <Header.Feature>
                    <Header.FeatureCallOut>Watch Dune Now</Header.FeatureCallOut>
                    <Header.Text>
                    Paul Atreides, must travel to the most dangerous planet in the universe to ensure the future of his family and his people. Malevolent forces explode into conflict over the most precious resource in existence, only those who can conquer their own fear will survive.
                    </Header.Text>
                    <Header.PlayButton>Play</Header.PlayButton>
                </Header.Feature>
            </Header>
            <FooterContainer />
        </>)
        : (<SelectProfileContainer user={user} setProfile={setProfile} />);
}