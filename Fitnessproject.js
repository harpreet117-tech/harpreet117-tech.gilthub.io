
const storiesData = [
    {
      story: "Before joining Premier Fitness, I struggled with staying consistent and lacked the motivation to work out. With the help of their personal trainers and a customized fitness plan, I lost 30 pounds in six months.",
      name: "Sophia",
      age: 28,
      image: "https://img.freepik.com/premium-photo/fitness-model-smile-wellbeing-active-lifestyle-concept-gym-blur-background_333547-21367.jpg"
    },
    {
      story: "Joining Premier Fitness was the best decision I’ve ever made. The body transformation challenge pushed me beyond my limits, and I ended up losing 15 pounds while gaining muscle.",
      name: "Emma",
      age: 27,
      image: "https://images.hdqwalls.com/download/gym-girl-2560x1440.jpg"
    },
    {
      story: "After recovering from an injury, I needed a place that could support my medical fitness needs. Premier Fitness offered exactly that, with recovery programs and caring staff.",
      name: "Liam",
      age: 34,
      image: "https://img.freepik.com/premium-photo/motivated-sportsman-leans-knee-does-sport-exercises-outdoor-warms-up-before-jogging-poses-near-river-dressed-active-wear-male-runner-does-stetching-exercise-prepares-workout_95891-11020.jpg"
    },
    {
      story: "As a busy mom, I always put myself last—until I joined Premier Fitness. The pilates and barre classes helped me shed postpartum weight and gave me much-needed time for myself.",
      name: "Olivia",
      age: 30,
      image: "https://rare-gallery.com/uploads/posts/108680-girl-fitness-exercise-gym-dumbbells-workout-sportswear-motivation.jpg"
    }
  ];
  
  let currentStoryIndex = 0;
  
  function updateStory() {
    const currentData = storiesData[currentStoryIndex];

    document.getElementById("story").innerText = currentData.story;

    document.getElementById("name").innerText = currentData.name;

    document.getElementById("age").innerText = currentData.age;

    document.getElementById("image").src = currentData.image;
  }

  function nextStory() {
    currentStoryIndex = (currentStoryIndex + 1) % storiesData.length;
    updateStory();
  }

  function prevStory() {
    currentStoryIndex = (currentStoryIndex - 1 + storiesData.length) % storiesData.length;
    updateStory();
  }
  
  updateStory();
  