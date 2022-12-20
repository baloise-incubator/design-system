import React, { useState } from "react";
import { useGlobals } from '@storybook/api';
import { addons, types } from '@storybook/addons';
import { version } from '../../../package.json'

addons.register("my/framework", () => {
  addons.add("my-framework-addon/toolbar", {
    title: "Framework",
    type: types.TOOL,
    type: types.TOOLEXTRA,
    //👇 Shows the Toolbar UI element if either the Canvas or Docs tab is active
    // match: ({ viewMode }) => !!(viewMode && viewMode.match(/^(story|docs)$/)),
    render: ({ active }) => {

      const [globals, updateGlobals] = useGlobals();
      const [framework, setFramework] = useState(globals.framework || 'angular')

      const onSelectChange = (event) => {
        const value = event.target.value
        updateGlobals({...globals, framework: value})
        setFramework(value)
      }

      return (
        <div className="my-version-tag">
          <select value={framework} onChange={onSelectChange}>
            <option value="angular">Angular</option>
            <option value="html">HTML</option>
            <option value="react">React</option>
            <option value="vue">Vue</option>
          </select>
        </div>
      )
    },
  });
});
