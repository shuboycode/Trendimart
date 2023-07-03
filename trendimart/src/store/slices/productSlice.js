import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchProductsData = createAsyncThunk(
  'api/fetchData',
  async () => {
    const response = await axios.get('https://kanhaiya.kuroit.in/trendimart/public/api/products');
    return response.data;
  }
);

const productSlice = createSlice({
  name: 'productsApi',
  initialState: {
    data: [],
    loading: false,
    error: null,
  },
  reducers: {
    
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProductsData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProductsData.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchProductsData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default productSlice.reducer;
