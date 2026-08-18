import{a,t as s}from"../chunks/Bubg1KWz.js";import"../chunks/Ct1SaaGW.js";var o=s(`<span class="flex flex-col bg-gray-800 rounded-lg shadow-lg p-5"><h1 class="text-2xl font-bold mb-4">Overlay effects in vanilla Minecraft using shaders</h1> <p class="mb-4">This article describes how you can make your own simple overlay effects in vanilla minecraft
		using core shaders and fonts. This method is compatible with mods like Sodium or Iris. It's
		limited to overlays since you can access the current render state from the shader</p> <h2 class="text-xl font-bold mt-6 mb-2">1. Filling the screen</h2> <p class="mb-4">First off, we want a single character to fill the whole screen when its rendered. For this we
		will use a vertex shader, to align the vertices of the letter plane with the corners of the game
		window.</p> <p class="font-mono mb-2">rendertype_text.vsh</p> <pre class="bg-gray-900 text-green-300 p-4 rounded mb-4"><code>/* GLSL code block placeholder */</code>
    </pre> <p class="mb-4">You will also need the json for the shader:</p> <pre class="bg-gray-900 text-green-300 p-4 rounded mb-4"><code>/* JSON code block placeholder */</code>
    </pre> <p class="mb-4">Nice, we now have a shader that produces very large characters.</p> <h2 class="text-xl font-bold mt-6 mb-2">2. Custom font</h2> <p class="mb-4">Since we don't want out shader to maximise <strong>all</strong> characters, we will make a custom
		font with a character that has a special texture which we will use to identify the character in the
		shader.</p> <p class="mb-4">First off create the texture; a 5x5 texture with the first pixel's alpha value being 254 and an
		RGB value of #010101 (or any other alpha/color combination you want to use)</p> <p class="mb-4">Then the font:</p> <pre class="bg-gray-900 text-green-300 p-4 rounded mb-4"><code>/* JSON code block placeholder */</code>
    </pre> <p class="mb-4">You can test your character using</p> <p class="mb-4"><code class="bg-gray-800 p-1 rounded">/tellraw &#123;"text": "A", "font": "thing:me"&#125;</code></p> <h2 class="text-xl font-bold mt-6 mb-2">3. Fragment shader</h2> <p class="mb-4">Now, just 1 solid color is not much of an effect and the character will stay visible as long as
		its still in the chat log of the client.</p> <p class="mb-4">In order to show/hide the character whenever we want, we use the <code class="bg-gray-800 p-1 rounded">title</code> command.</p> <p class="mb-4">The fade-in and fade-out duration as well as the duration the title stays in the screen for can
		be configured on a per-player basis using the <code class="bg-gray-800 p-1 rounded">title</code> command.</p> <p class="mb-4">This is not only useful for a very basic fading effect to fade to black and back, but it also
		gives us a <code class="bg-gray-800 p-1 rounded">time</code> variable - we can use the transparency
		of the title in the shader for that!</p></span>`);function c(e){var t=o();a(e,t)}export{c as component};
