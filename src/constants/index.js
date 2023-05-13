import {
	backend,
	creator,
	web,
	javascript,
	// typescript,
	html,
	css,
	reactjs,
	// redux,
	tailwind,
	nodejs,
	mongodb,
	git,
	figma,
	// docker,
	meta,
	starbucks,
	tesla,
	shopify,
	codex,
	dalle,
	generator,
	threejs,
  } from "../assets";
  
  export const navLinks = [
	{
	  id: "about",
	  title: "About",
	},
	{
	  id: "work",
	  title: "Work",
	},
	{
	  id: "contact",
	  title: "Contact",
	},
  ];
  
  const services = [
	{
	  title: "Web Developer",
	  icon: web,
	},
	{
	  title: "NodeJS Native Developer",
	  icon: nodejs,
	},
	{
	  title: "Backend Developer",
	  icon: backend,
	},
	{
	  title: "Frontend Developer",
	  icon: creator,
	},
  ];
  
  const technologies = [
	{
	  name: "HTML 5",
	  icon: html,
	},
	{
	  name: "CSS 3",
	  icon: css,
	},
	{
	  name: "JavaScript",
	  icon: javascript,
	},
	// {
	//   name: "TypeScript",
	//   icon: typescript,
	// },
	{
	  name: "React JS",
	  icon: reactjs,
	},
	// {
	//   name: "Redux Toolkit",
	//   icon: redux,
	// },
	{
	  name: "Tailwind CSS",
	  icon: tailwind,
	},
	{
	  name: "Node JS",
	  icon: nodejs,
	},
	{
	  name: "MongoDB",
	  icon: mongodb,
	},
	{
	  name: "Three JS",
	  icon: threejs,
	},
	{
	  name: "git",
	  icon: git,
	},
	{
	  name: "figma",
	  icon: figma,
	},
	// {
	//   name: "docker",
	//   icon: docker,
	// },
  ];
  
  const experiences = [
	{
	  title: "React.js Developer",
	  company_name: "Starbucks",
	  icon: starbucks,
	  iconBg: "#383E56",
	  date: "March 2020 - April 2021",
	  points: [
		"Developing and maintaining web applications using React.js and other related technologies.",
		"Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
		"Implementing responsive design and ensuring cross-browser compatibility.",
		"Participating in code reviews and providing constructive feedback to other developers.",
	  ],
	},
	{
	  title: "React Native Developer",
	  company_name: "Tesla",
	  icon: tesla,
	  iconBg: "#E6DEDD",
	  date: "Jan 2021 - Feb 2022",
	  points: [
		"Developing and maintaining web applications using React.js and other related technologies.",
		"Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
		"Implementing responsive design and ensuring cross-browser compatibility.",
		"Participating in code reviews and providing constructive feedback to other developers.",
	  ],
	},
	{
	  title: "Web Developer",
	  company_name: "Shopify",
	  icon: shopify,
	  iconBg: "#383E56",
	  date: "Jan 2022 - Jan 2023",
	  points: [
		"Developing and maintaining web applications using React.js and other related technologies.",
		"Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
		"Implementing responsive design and ensuring cross-browser compatibility.",
		"Participating in code reviews and providing constructive feedback to other developers.",
	  ],
	},
	{
	  title: "Full stack Developer",
	  company_name: "Meta",
	  icon: meta,
	  iconBg: "#E6DEDD",
	  date: "Jan 2023 - Present",
	  points: [
		"Developing and maintaining web applications using React.js and other related technologies.",
		"Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
		"Implementing responsive design and ensuring cross-browser compatibility.",
		"Participating in code reviews and providing constructive feedback to other developers.",
	  ],
	},
  ];
  
  const testimonials = [
	{
	  testimonial:
	  "I thought it was impossible to make a website as beautiful as our product, but Yaroslav proved me wrong.",
	  name: "Sara Lee",
	  designation: "CFO",
	  company: "Acme Co",
	  image: "https://randomuser.me/api/portraits/women/4.jpg",
	},
	{
	  testimonial:
		"I've never met a web developer who truly cares about their clients' success like Yaroslav does.",
	  name: "Chris Brown",
	  designation: "COO",
	  company: "DEF Corp",
	  image: "https://randomuser.me/api/portraits/men/5.jpg",
	},
	{
	  testimonial:
		"After Yaroslav optimized our website, our traffic increased by 50%. We can't thank them enough!",
	  name: "Lisa Wang",
	  designation: "CTO",
	  company: "456 Enterprises",
	  image: "https://randomuser.me/api/portraits/women/6.jpg",
	},
  ];
  
  const projects = [
	{
	  name: "3D Customizer With ChatGPT",
	  description:
		"This project allows you to make your own t-shirt, customize it, choose a color and image upload and ask ChatGPT to make your own t-shirt by the prompt.",
	  tags: [
		{
		  name: "react",
		  color: "blue-text-gradient",
		},
		{
		  name: "javascript",
		  color: "green-text-gradient",
		},
		{
		  name: "tailwind",
		  color: "pink-text-gradient",
		},
	  ],
	  image: dalle,
	  source_code_link: "https://github.com/ElonMusk2002/T-Shirt_3D__Customizer_With_ChatGPT",
	},
	{
	  name: "CodeX",
	  description:
		"A powerfull web application that allows user to chat with chatGPT to help with code. No needed vpn or logging ",
	  tags: [
		{
		  name: "express",
		  color: "blue-text-gradient",
		},
		{
		  name: "NodeJS",
		  color: "green-text-gradient",
		},
		{
		  name: "openAiAPI",
		  color: "pink-text-gradient",
		},
	  ],
	  image: codex,
	  source_code_link: "https://github.com/ElonMusk2002/Codex-ChatGPT",
	},
	{
	  name: "Image Generator by DALL-E",
	  description:
		"A repository that generates images using OpenAI API key written in Python using Django1. DALL·E is a 12-billion parameter version of GPT-3 trained to generate images from text descriptions",
	  tags: [
		{
		  name: "openAiAPI",
		  color: "blue-text-gradient",
		},
		{
		  name: "Python",
		  color: "green-text-gradient",
		},
		{
		  name: "Django",
		  color: "pink-text-gradient",
		},
	  ],
	  image: generator,
	  source_code_link: "https://github.com/ElonMusk2002/Image_Generator_DALL-E",
	},
  ];
  
  export { services, technologies, experiences, testimonials, projects };