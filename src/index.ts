/* eslint-disable @typescript-eslint/no-empty-interface */
interface IntPtrInitialized {}
interface FloatPtrInitialized {}
interface IntPtr {}
interface FloatPtr {}
interface VectorPtr {}
interface ReturnResultAnyway {}
interface ResultAsInteger {}
interface ResultAsFloat {}
interface ResultAsString {}
interface ResultAsVector {}
interface ResultAsLong {}
interface ResultAsObject {}

type InputArgument =
    | string
    | number
    | IntPtrInitialized
    | FloatPtrInitialized
    | IntPtr
    | FloatPtr
    | VectorPtr
    | ReturnResultAnyway
    | ResultAsInteger
    | ResultAsFloat
    | ResultAsString
    | ResultAsVector
    | ResultAsLong
    | ResultAsObject;

interface CitizenInterface {
    trace(...args: string[]): void;
    setTickFunction(callback: Function): void;
    setEventFunction(callback: Function): void;

    setCallRefFunction(callback: Function): void;
    setDeleteRefFunction(callback: Function): void;
    setDuplicateRefFunction(callback: Function): void;
    canonicalizeRef(ref: number): string;
    invokeFunctionReference(ref: string, args: Uint8Array): Uint8Array;

    getTickCount(): number;
    invokeNative<T = void>(hash: string, ...args: InputArgument[]): T;
    startProfiling(name?: string): void;
    stopProfiling(name?: string): {};

    pointerValueIntInitialized(): IntPtrInitialized;
    pointerValueFloatInitialized(): FloatPtrInitialized;
    pointerValueInt(): IntPtr;
    pointerValueFloat(): FloatPtr;
    pointerValueVector(): VectorPtr;
    returnResultAnyway(): ReturnResultAnyway;
    resultAsInteger(): ResultAsInteger;
    resultAsFloat(): ResultAsFloat;
    resultAsString(): ResultAsString;
    resultAsVector(): ResultAsVector;
    resultAsLong(): ResultAsLong;
    resultAsObject(): ResultAsObject;

    makeRefFunction(refFunction: Function): string;
}

// eslint-disable-next-line no-var
declare var Citizen: CitizenInterface;

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

declare function GetConvar(varName: string, default_: string): string;

declare function GetConvarInt(varName: string, default_: number): number;

declare function GetActivePlayers(): Array<number>;

/**
 * Registered commands can be executed by entering them in the client console (this works for client side and server side registered commands).
 * Or by entering them in the server console/through an RCON client (only works for server side registered commands).
 * Or if you use a supported chat resource, like the default one provided in the cfx-server-data repository, then you can enter the command in chat by prefixing it with a /.
 * Commands registered using this function can also be executed by resources, using the ExecuteCommand native.
 * The restricted bool is not used on the client side. Permissions can only be checked on the server side, so if you want to limit your command with an ace permission automatically, make it a server command (by registering it in a server script).
 * @param commandName - The command you want to register.
 * @param handler - A handler function that gets called whenever the command is executed.
 * @param restricted - If this is a server command and you set this to true, then players will need the command.yourCommandName ace permission to execute this command.
 */
declare function RegisterCommand(commandName: string, handler: Function, restricted: boolean): void;

/**
 * Cancels the currently executing event.
 */
declare function CancelEvent(): void;

/**
 * Returns the name of the currently executing resource.
 */
declare function GetCurrentResourceName(): string;

declare function IsDuplicityVersion(): boolean;

/**
 * Returns the NUI window handle for a specified DUI browser object.
 * @param duiObject The DUI browser handle.
 * @return The NUI window handle, for use in e.g. CREATE_RUNTIME_TEXTURE_FROM_DUI_HANDLE.
 */
declare function GetDuiHandle(duiObject: number): string;

/**
 * Sends a message to the specific DUI root page. This is similar to SEND_NUI_MESSAGE.
 * @param duiObject The DUI browser handle.
 * @param jsonString The message, encoded as JSON.
 */
declare function SendDuiMessage(duiObject: number, jsonString: string): void;

declare function IsDuiAvailable(duiObject: number): boolean;

declare function GetNuiCursorPosition(): [number, number];

declare function IsNuiFocused(): boolean;

declare function IsNuiFocusKeepingInput(): boolean;

declare function SendLoadingScreenMessage(jsonString: string): boolean;

declare function SendNuiMessage(jsonString: string): boolean;

declare function SendNUIMessage(data: any): void;

declare function RegisterRawNuiCallback(callbackType: string, callback: Function): void;

declare function RegisterNuiCallbackType(callbackType: string): void;

declare function ShutdownLoadingScreenNui(): void;

declare function SetManualShutdownLoadingScreenNui(manualShutdown: boolean): void;

declare function SetNuiFocus(hasFocus: boolean, hasCursor: boolean): void;

declare function SetNuiFocusKeepInput(keepInput: boolean): void;

/**
 * Use this to export functions so they can be called from other resources.
 * For example:
 * exports("dropPlayer", (src: string, reason: string) => {
 *     DropPlayer(src, reason);
 * });
 */
declare var exports: any; // eslint-disable-line no-var
