// Generated by dts-bundle v0.7.3

type DefaultFunction = (...args: any[]) => void;
type Arguments<F extends Function> = F extends (...args: infer A) => any ? A : never;
export type UnsubscribeArgtiveEventHandler = () => void;
export class ArgtiveEvent<T extends DefaultFunction = DefaultFunction> {
        constructor();
        /**
            * All subscriptions will be called at once, when this event instance gets invoked.
            * @param fn
            * @returns A function you can call to unsubscribe.
            */
        subscribe(fn: T): UnsubscribeArgtiveEventHandler;
        /**
            * Unsubscribe a handler you subscribed before.
            * @param fn
            */
        unsubscribe(fn: T): void;
        apply(scope?: null, args?: Arguments<T>): void;
        call(scope?: null, ...args: Arguments<T>): void;
        invoke(...args: Arguments<T>): void;
        /**
            * @returns The amount of subscriptions.
            */
        length(): number;
}
export {};

