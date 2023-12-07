---
title: "Try Catch This"
date: 2023-12-07 09:01
categories:
  - Blog
  - Programming
tags: 
  - C#
---

Errors. They happen. But sometimes you can see them coming. And you want to be prepared. Maybe a deserializing some json to an object model might fail. Then you'd want to try a slightly one. If that one fails, maybe you'd call it quits.
  
  ```csharp
  try
  {
      var result = JsonConvert.DeserializeObject<SomeObject>(json);
  }
  catch (JsonSerializationException)
  {
      var result = JsonConvert.DeserializeObject<SomeOtherObject>(json);
  }

  ```
Though this is not the type of code I like to write (oh, the trauma of seeing exception in your lines) its unavoidable sometimes. 
I mean it makes basic sense even from a human perspective, right? If you're trying to do something and it doesn't work you try something else before calling it quits.

But here's the thing though. You must know *exactly*  what might come at you. A really horrible thing to do would be

```csharp
try
{
    var result = JsonConvert.DeserializeObject<SomeObject>(json);
}
catch (Exception)
{
    var result = JsonConvert.DeserializeObject<SomeOtherObject>(json);
}
```

Yh that's not it at all. You're basically saying "I don't know what might happen, but I'll try to catch it anyway". That's not a good idea. You might end up catching something you didn't expect and then you'd be in a world of pain. You even catch a cold. (I'm sorry, I couldn't resist)

So catch what you know, and personally, I try not to catch anything at all, except as a last resort. 
