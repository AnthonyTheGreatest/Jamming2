import React from 'react';
import './App.css';
import SearchBar from '../SearchBar/SearchBar';
import SearchReasults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { searshResults: [{name: 'name1', artist: 'artist1', album: 'album1', id: 1},
                                   {name: 'name2', artist: 'artist2', album: 'album2', id: 2},
                                   {name: 'name3', artist: 'artist3', album: 'album3', id: 3}],
                   playlistName: 'My playlist',
                   playlistTracks: [
                    {playlistName: 'name1', playlistArtist: 'artist1', playlistAlbum: 'album1', id: 4},
                    {playlistName: 'name2', playlistArtist: 'artist2', playlistAlbum: 'album2', id: 5},
                    {playlistName: 'name3', playlistArtist: 'artist3', playlistAlbum: 'album3', id: 6}
                   ]
                  };
    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
    this.updatePlaylistName = this.updatePlaylistName.bind(this);
    this.savePlaylist = this.savePlaylist.bind(this);
    this.search = this.search.bind(this);
  }

  addTrack(track) {
    // if (track.id !== this.state.playlistTracks.id) {
    //   this.state.playlistTracks.push(track);
    // }
    let tracks = this.state.playlistTracks;
    if (tracks.find(element => element.id === track.id)) {
      return;
    }
    tracks.push(track);
    this.setState({playlistTracks: tracks});
  }

  removeTrack(track) {
    let tracks = this.state.playlistTracks;
    tracks = tracks.filter(currentTrack => currentTrack.id !== track.id);
    this.setState({playlistTracks: tracks});
  }

  updatePlaylistName(newName) {
    this.setState({playlistName: newName});
  }

  savePlaylist() {
    const trackURIs = this.state.playlistTracks.map(track => track.uri);
  }

  search(term) {
    console.log(term);
  }

  render() {
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          <SearchBar onSearch={this.search} />
          <div className="App-playlist">
            <SearchReasults searchResults={this.state.searshResults} onAdd={this.addTrack} />
            <Playlist playlistName={this.state.playlistName}
                      playlistTracks={this.state.playlistTracks}
                      onRemove={this.removeTrack}
                      onNameChange={this.updatePlaylistName}
                      onSave={this.savePlaylist} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
