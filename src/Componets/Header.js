import  React from 'react'; 
import {AppBar,Box,Toolbar,IconButton,Typography} from '@mui/material';
import {Menu as MenuIcon,YouTube as YouTubeIcon ,Search as SearchIcon} from '@mui/icons-material';
import  {Search,SearchIconWrapper,StyledInputBase} from './Styles'
import {youtTube} from '../Apis';
import {Store} from '../Store';
export default function Header() {
  const [query, setquery] = React.useState('Punjabi songs');
  const {Dispatch}  =  React.useContext(Store);

  const HandleSubmit=(e)=>{
    e.preventDefault();
    UpdateVideos();
  }

  const UpdateVideos = ()=>{
    youtTube(query).then((response)=>{
      const data = response.data.items
      Dispatch({type:'Videos',value:data});
      Dispatch({type:'Selected',value:data[0]});
    });
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"    
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'flex' },alignItems:'center' }}
          >
           <YouTubeIcon/> &nbsp; Youtube
          </Typography>
          <Search>
            <form onSubmit={HandleSubmit}>
              <SearchIconWrapper>
                  <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ 'aria-label': 'search' }}
                value={query}
                onChange={(e)=>setquery(e.target.value)}
              />
            </form>
          </Search>
        </Toolbar>
      </AppBar>
    </Box>
  );
}