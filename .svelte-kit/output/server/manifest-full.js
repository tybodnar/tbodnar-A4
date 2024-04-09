export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["check.png","favicon.png","manifest.json","service-worker.js"]),
	mimeTypes: {".png":"image/png",".json":"application/json"},
	_: {
		client: {"start":"_app/immutable/entry/start.CM7X4R-6.js","app":"_app/immutable/entry/app.COpdNtQm.js","imports":["_app/immutable/entry/start.CM7X4R-6.js","_app/immutable/chunks/entry.0gw1zmh9.js","_app/immutable/chunks/scheduler.BAwge4yL.js","_app/immutable/chunks/index.BXwGqzWn.js","_app/immutable/entry/app.COpdNtQm.js","_app/immutable/chunks/scheduler.BAwge4yL.js","_app/immutable/chunks/index.riwe47ij.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
