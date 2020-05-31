/**
 * Emit event to another client script locally
 * @param eventName - which event will be sent to the client script
 * @param args - arguments to be passed to client script
 */
declare function emit(eventName: string, ...args: any[]): void;

/**
 * Emit event to the server
 * @param eventName - which event will be sent to the server
 * @param args - arguments to be passed to server
 */
declare function emitNet(eventName: string, ...args: any[]): void;

/**
 * Used for server -> client communication
 * @param eventName - which event was called from server
 * @param callback - function to execute
 */
declare function onNet(eventName: string, callback: Function): void;

/**
 * Used for client -> client local communication
 * @param eventName - which event was called from another client
 * @param callback - function to execute
 */
declare function on(eventName: string, callback: Function): void;

/**
 * This allows you to create a timer that ticks every game frame / server tick.
 * It can be used like a loop that runs forever unless cancelled.
 * @param callback - function to execute periodically
 */
declare function setTick(callback: Function): number;

/**
 * Cancel periodic loop.
 * @param callback - callback id obtained from `setTick` method
 */
declare function clearTick(callback: number): void;
