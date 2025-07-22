

// const Input = () => {
//   return (
//    <input
//           className=" w-190 border-2 rounded-md pl-3"
//           type="text"
//           placeholder="Search Questions"
//         />
//   )
// }

// export default Input


import * as React from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import { SearchIcon } from 'lucide-react';

export default function InputAdornments() {
  return (
       <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
         <div>
           <FormControl fullWidth sx={{ m: 1 }}>
             <InputLabel id='demo-multiple-chip' htmlFor="outlined-adornment-amount">Search</InputLabel>
             <OutlinedInput
               id="outlined-adornment-amount"
               startAdornment={<InputAdornment position="start"></InputAdornment>}
               label="Amount"
               notched
             />
           </FormControl>
         </div>
       </Box>
  );
}
//    <FormControl> 
//     <TextField fullWidth sx={{ m: 1}}
//       label="Search" // This acts as the placeholder that animates
//       variant="outlined" // You can choose "standard", "filled", or "outlined"
//       InputProps={{
//         startAdornment: (
//           <InputAdornment position="start">
//           </InputAdornment>
//         ),
//       }}
//     />
//     </FormControl>