import React,{useState} from "react";

import {
View,
StyleSheet
} from "react-native";

import {
QueryClient,
QueryClientProvider,
useQuery,
useMutation,
useQueryClient
}
from "@tanstack/react-query";

import {
fetchPosts,
createPost,
updatePost,
patchPost,
deletePost
}
from "./services/api";

import PostList from "./components/PostList";
import CreatePost from "./components/CreatePost";
import FilterPosts from "./components/FilterPosts";

const queryClient =
new QueryClient();

function Home(){

const qc=
useQueryClient();

const [userId,setUserId]=
useState("");

const {
data=[]
}
=
useQuery({

queryKey:[
"posts",
userId
],

queryFn:()=>
fetchPosts(userId)

});

const createMutation=
useMutation({

mutationFn:createPost,

onSuccess:(newPost)=>{

qc.setQueryData(
["posts",userId],

(old=[])=>

[
{
...newPost,
id:Date.now()
},

...old

]

);

}

});

const updateMutation=
useMutation({

mutationFn:updatePost,

onSuccess:(updated)=>{

qc.setQueryData(

["posts",userId],

(old=[])=>

old.map(

(post)=>

post.id===
updated.id

? updated

: post

)

);

}

});

const patchMutation=
useMutation({

mutationFn:patchPost,

onSuccess:(updated)=>{

qc.setQueryData(

["posts",userId],

(old=[])=>

old.map(

(post)=>

post.id===
updated.id

?

{
...post,
title:
updated.title
}

:post

)

);

}

});

const deleteMutation=
useMutation({

mutationFn:deletePost,

onSuccess:(id)=>{

qc.setQueryData(

["posts",userId],

(old=[])=>

old.filter(

(post)=>

post.id!==id

)

);

}

});

return(

<View
style={
styles.container
}
>

<FilterPosts
userId={userId}
setUserId={setUserId}
/>

<CreatePost

onSubmit={(data)=>

createMutation
.mutate(data)

}

/>

<PostList

posts={data}

onDelete={(id)=>

deleteMutation
.mutate(id)

}

onUpdate={(post)=>

updateMutation
.mutate(post)

}

onPatch={(post)=>

patchMutation
.mutate(post)

}

/>

</View>

);

}

export default function App(){

return(

<QueryClientProvider
client={
queryClient
}
>

<Home/>

</QueryClientProvider>

);

}

const styles=
StyleSheet.create({

container:{

flex:1,

padding:20,

marginTop:50,

backgroundColor:
"#f5f5f5"

}

});