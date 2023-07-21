import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const postItemToServer = createAsyncThunk(
  "wishlist/postItemToServer",
  async ( {singleItem} , thunkAPI) => {
    try {
      const res = await axios.post("http://localhost:3001/wishlist", singleItem);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// fetchcart is used here to fetching data.
export const fetchWishlist = createAsyncThunk("api/fetchData", async () => {
  const response = await axios.get("http://localhost:3001/wishlist");
  return response.data;
});



const wishlistSlice = createSlice({
  name: "wishlist",
  initialState: {
    wishlistItems: [],
    status: "idle",
    error: null,
  },
  reducers: {
    addToWishlist: (state, action) => {
      state.wishlistItems.push(action.payload);
    },
    removeFromWishlist: (state, action) => {
      state.wishlistItems = state.wishlistItems.filter(
        (wishlistItems) => wishlistItems !== action.payload
      );
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(postItemToServer.pending, (state) => {
        state.status = "loading";
      })
      .addCase(postItemToServer.fulfilled, (state, action) => {
        state.status = "idle";
        state.wishlistItems.push(action.payload);
      })
      .addCase(postItemToServer.rejected, (state, action) => {
        state.status = "idle";
        state.error = action.payload;
      })

      .addCase(fetchWishlist.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchWishlist.fulfilled, (state, action) => {
        state.wishlistItems.push(...action.payload);
        state.isLoading = false;
      })
      .addCase(fetchWishlist.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export const { addToWishlist, removeFromWishlist } = wishlistSlice.actions;

// Selectors

export const selectCart = (state) => state.products.cart;
export const selectIsLoading = (state) => state.products.isLoading;
export const selectError = (state) => state.products.error;

export default wishlistSlice.reducer;
